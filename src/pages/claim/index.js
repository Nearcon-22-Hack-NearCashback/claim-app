import React, { useEffect } from 'react';
import './index.css';
import { useHistory, useLocation } from "react-router-dom";
import * as nearAPI from "near-api-js";
const walletLink = "https://app.mynearwallet.com/linkdrop/near/"
const { keyStores, KeyPair } = nearAPI;

const network = 'testnet'

function useQuery() {
    const location = useLocation();

    console.log('search', location);

    return React.useMemo(() => new URLSearchParams(location.search), [location.search]);
}

function ClaimPage() {
    const query = useQuery();
    const key = query.get("key");
    const id = query.get("id");
    const myKeyStore = new keyStores.InMemoryKeyStore();

    // useEffect(() => {
    //     getOneTimeKey()
    // }, [])

    const getOneTimeKey = async () => {
        const claimKey = await window.contract.get_claiming_key()

        const keyPair = KeyPair.fromString(claimKey);
        await myKeyStore.setKey(network, "nearcashback.testnet", keyPair);
    }

    const getLinkdrop = () => {
        return walletLink + key
    }

    const claim = async () => {
        const keyPair = await myKeyStore.getKey(network, "nearcashback.testnet");
        const msg = Buffer.from(id);

        const { signature } = keyPair.sign(msg);

        await window.contract.claim({
            signature,
            id
        })

        window.location.replace(getLinkdrop())
    }

    return (
        <div className="page-wrapper">
            <div className="card">
                <h1>NEAR</h1>
                <div className="middle-text">Thank You</div>
                <button onClick={claim} className="claim-button">Claim your cashback</button>
            </div>
        </div>
    );
}

export default ClaimPage;
