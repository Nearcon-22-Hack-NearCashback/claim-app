import React, { useEffect, useState } from 'react';
import BN from "bn.js";
import { useLocation } from "react-router-dom";
import * as nearAPI from "near-api-js";
import './index.css';

const { KeyPair } = nearAPI;
const walletLink = "https://wallet.near.org/linkdrop/near/";
// const walletLink = "https://app.mynearwallet.com/linkdrop/near/"

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
    const [amount, setAmount] = useState(0)
    const query = useQuery();
    const key = query.get("key");
    const id = query.get("id");

    useEffect(() => {
        getOneTimeKey()
        getAmount()
    }, [])

    const getOneTimeKey = async () => {
        setLoading(true)
        const response = await window.contract.get_claiming_key()

        const keyPair = KeyPair.fromString(response);
        await window.nearConnection.connection.signer.keyStore.setKey(network, "cashback.nearprotocolua.near", keyPair);

        window.account = await window.nearConnection.account("cashback.nearprotocolua.near", window.nearConnection.connection.signer.keyStore);
        setLoading(false)
    }

    const getAmount = async () => {
        setLoading(true)
        const amount = await window.contract.get_cashback_amount({
            id: +id
        })

        setAmount(nearAPI.utils.format.formatNearAmount(amount, 4))

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
                {/*<img*/}
                {/*    style={{ height: '100%', width: '100%'}}*/}
                {/*    src="../../assets/logo-white.svg"*/}
                {/*    alt="near-image"*/}
                {/*/>*/}
                <h1 className="ash-1">Cashback</h1>
                <h2 className="ash-2">{ amount }Ⓝ <br/> Thank You</h2>
                {/*<div className="middle-text"></div>*/}
                <button disabled={loading} onClick={claim} className="button-35 claim-button">Claim</button>
            </div>
            {
                loading && (
                    <div className="loader-4 center"><span></span></div>
                )
            }
            <div className='light x1'></div>
            <div className='light x2'></div>
            <div className='light x3'></div>
            <div className='light x4'></div>
            <div className='light x5'></div>
            <div className='light x6'></div>
            <div className='light x7'></div>
            <div className='light x8'></div>
            <div className='light x9'></div>
        </div>
    );
}

export default ClaimPage;
