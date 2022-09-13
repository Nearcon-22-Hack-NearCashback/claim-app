import React, { useEffect, useState } from 'react';
import BN from "bn.js";
import { useLocation } from "react-router-dom";
import * as nearAPI from "near-api-js";
import './index.css';

const { KeyPair } = nearAPI;
const walletLink = "https://app.mynearwallet.com/linkdrop/near/"

const network = 'mainnet'

const numberToUint8Array = (x) => {
    console.log('x', x);
    return Buffer.from(x.toArray("be", 8));
};


function useQuery() {
    const location = useLocation();

    return React.useMemo(() => new URLSearchParams(location.search), [location.search]);
}

function ClaimPage() {
    const [loading, setLoading] = useState(false)
    const query = useQuery();
    const key = query.get("key");
    const id = query.get("id");

    useEffect(() => {
        getOneTimeKey()
    }, [])

    const getOneTimeKey = async () => {
        setLoading(true)
        const response = await window.contract.get_claiming_key()

        const keyPair = KeyPair.fromString(response);
        await window.nearConnection.connection.signer.keyStore.setKey(network, "cashback.nearprotocolua.near", keyPair);


        window.account = await window.nearConnection.account("cashback.nearprotocolua.near", window.nearConnection.connection.signer.keyStore);
        setLoading(false)
    }

    const getLinkdrop = () => {
        return walletLink + key
    }

    const claim = async () => {
        setLoading(true)
        const { utils } = nearAPI;

        const keyPair = utils.KeyPairEd25519.fromString(
            key
        );
        const cashbackId = +id;

        const buffer = numberToUint8Array(new BN(cashbackId));
        console.log('buffer', buffer);

        const signed = keyPair.sign(buffer);

        const signature = signed.signature;

        await window.contract.claim({
            signature: Array.from(signature),
            id: +cashbackId
        })

        window.location.replace(getLinkdrop())
        setLoading(false)
    }

    return (
        <div className="page-wrapper">
            <div className={loading ? "card cringe" : "card"}>
                <h1>NEAR</h1>
                <div className="middle-text">Thank You</div>
                <button disabled={loading} onClick={claim} className="claim-button">Claim your cashback</button>
            </div>
            {
                loading && (
                    <div className="loader-4 center"><span></span></div>
                )
            }
        </div>
    );
}

export default ClaimPage;
