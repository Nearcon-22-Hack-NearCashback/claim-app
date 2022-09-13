import React, {useEffect, useState} from 'react'
import Character from "./components/character";
import PageWrapper from "../../components/pageWrapper";
import {useInterval} from "../../utils/hooks";
import Humanitarian from "./components/humanitarian";
import { utils } from "near-api-js";
import Experience from "./components/experience";
import ItemsBar from "./components/itemsBar";
import EventModal from "./components/eventModal";
import ItemShop from "./components/itemShop";
import './index.css'
import Attributes from "./components/attributes";

export default function GamePage() {
    // const [isLoading, setIsLoading] = useState(true)
    // const [eating, setEating] = useState(false)
    // const [eventModal, setEventModal] = useState(false)
    // const [eatingTimes, setEatingTimes] = useState(0)
    // const [humanitarianInput, setHumanitarianInput] = useState(0)
    // const [userBalance, setUserBalance] = useState(0)
    // const [attributes, setAttributes] = useState({
    //     health: 0,
    //     max_experience: 0,
    //     attributes: {
    //         max_health: 0,
    //     },
    //     items: {
    //         helmet: false,
    //         car: false,
    //         bicycle: false,
    //         armor: false,
    //     }
    // })
    //
    // useEffect(() => {
    //     const getUserBalance = async () => {
    //         window.balance = await window.account.getAccountBalance()
    //         setUserBalance(utils.format.formatNearAmount(window.balance.available));
    //     }
    //     getUserBalance()
    //     getAttributes()
    // }, [])
    //
    // useInterval(() => {
    //     setEating(!eating)
    //     setEatingTimes(eatingTimes + 1)
    // }, eatingTimes && eatingTimes <= 10 ? 600 : null)
    //
    // const getAttributes = async () => {
    //     const card_attr = await window.contract.get_attributes();
    //     setAttributes(card_attr)
    //     setIsLoading(false)
    // }
    //
    // const deliverHumanitarian = async () => {
    //     setIsLoading(true)
    //     const card_attr = await window.contract.deliver_humanitarian();
    //     setAttributes({
    //         ...card_attr.card_attr,
    //         ...card_attr,
    //     })
    //     setEventModal(true)
    //     setIsLoading(false)
    // }
    //
    // const handleFoodInputChange = (e) => {
    //     setHumanitarianInput(e.target.value)
    // }
    //
    // const restoreHealth = async () => {
    //     setIsLoading(true)
    //     await window.contract.restore_health();
    //     setIsLoading(false)
    //     setAttributes({
    //         ...attributes,
    //         health: 100
    //     })
    // }
    //
    // const buyFood = async () => {
    //     setIsLoading(true)
    //     const contracthumanitarianCount = await window.contract.buy_humanitarian(
    //         {},
    //         300000000000000, // attached GAS (optional)
    //         utils.format.parseNearAmount(humanitarianInput || "1")
    //     );
    //     setIsLoading(false)
    //     setAttributes({
    //         ...attributes,
    //         humanitarian: contracthumanitarianCount
    //     })
    // }
    //
    // const level = attributes?.max_experience / 40 - 1

    return (
        <div>Nothing here</div>
    )
}
