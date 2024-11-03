import { Refers } from './../constants/Refers'
import { Global } from './../constants/Global';

type ReferKey = keyof typeof Refers

type RefersMap = {
    [key: number]: [string, number]
}

type ReturnType = {
    value: string;
    check: number;
}

const defaultReturn = {value: '-', check: 9}

export const Calculations = (area: number, title: string) => {
    area = Math.round(area)

    switch(title){
        case "Dhana/Runa" : 
            return calculateDhanaRuna(area)
        case "Aaya" : 
            return calculateAaya(area, title)
        case "Thithi" : 
            return calculateThithi(area, title)
        case "Vaara" : 
            return calculateVaara(area, title)
        case "Nakshatra" : 
            return calculateNakshatra(area, title)
        case "Yoga" : 
            return calculateYoga(area, title)
        case "Karana" : 
            return calculateKarana(area, title)
        case "Amsha" : 
            return calculateAmsha(area, title)
        case "Aayushya" : 
            return calculateAayushya(area)
        case "Graha" : 
            return calculateGraha(area, title)
        case "Dhikpaalaka" : 
            return calculateDhikpaalaka(area, title)
        case "Shubha" :
            return calculateShubha(area)
        case "Phala" :
            return calculatePhala(area)
    }
  };

const calculateDhanaRuna = (area: number): ReturnType => {
    if(!area) return defaultReturn;
    let dhanaValue = (area * 8) % 12 || 12
    let runaValue = (area * 3) % 8 || 8
    let check = dhanaValue > runaValue ? 1 : 0
    Global.Shubha += check
    return {value: "", check} 
}
const calculateAaya = (area: number, title: ReferKey): ReturnType => {
    if(!area) return defaultReturn;
    let result = (area * 9) % 8 || 8
    let key = Refers[title] as unknown as RefersMap
    const [value, check] = key[result]
    Global.Shubha += check
    Global.Phala += check
    return { value, check } 
}
const calculateThithi = (area: number, title: ReferKey): ReturnType => {
    if(!area) return defaultReturn;
    let result = (area * 6) % 30 || 30
    let key = Refers[title] as unknown as RefersMap
    const [value, check] = key[result]
    Global.Shubha += check
    return { value, check } 
}
const calculateVaara = (area: number, title: ReferKey): ReturnType => {
    if(!area) return defaultReturn;
    let result = (area * 9) % 7 || 7
    let key = Refers[title] as unknown as RefersMap
    const [value, check] = key[result]
    Global.Shubha += check
    return { value, check } 
}
const calculateNakshatra = (area: number, title: ReferKey): ReturnType => {
    if(!area) return defaultReturn;
    let result = (area * 8) % 27 || 27
    let key = Refers[title] as unknown as RefersMap
    const [value, check] = key[result]
    Global.Shubha += check
    return { value, check } 
}
const calculateYoga = (area: number, title: ReferKey): ReturnType => {
    if(!area) return defaultReturn;
    let result = (area * 4) % 27 || 27
    let key = Refers[title] as unknown as RefersMap
    const [value, check] = key[result]
    Global.Shubha += check
    return { value, check } 
}
const calculateKarana = (area: number, title: ReferKey): ReturnType => {
    if(!area) return defaultReturn;
    let result = (area * 5) % 11 || 11
    let key = Refers[title] as unknown as RefersMap
    const [value, check] = key[result]
    Global.Shubha += check
    return { value, check } 
}
const calculateAmsha = (area: number, title: ReferKey): ReturnType => {
    if(!area) return defaultReturn;
    let result = (area * 6) % 9 || 9
    let key = Refers[title] as unknown as RefersMap
    const [value, check] = key[result]
    Global.Shubha += check
    return { value, check } 
}
const calculateAayushya = (area: number): ReturnType => {
    if(!area) return defaultReturn;
    let result = (area * 9) % 120 || 120
    const value = result.toString()
    let check = result >= 60 ? 1 : 0
    Global.Shubha += check
    Global.Phala += check
    return { value, check } 
}
const calculateGraha = (area: number, title: ReferKey): ReturnType => {
    if(!area) return defaultReturn;
    let result = (area * 5) % 9 || 9
    let key = Refers[title] as unknown as RefersMap
    const [value, check] = key[result]
    Global.Shubha += check
    return {value, check} 
}
const calculateDhikpaalaka = (area: number, title: ReferKey): ReturnType => {
    if(!area) return defaultReturn;
    let result = (area * 9) % 8 || 8
    let key = Refers[title] as unknown as RefersMap
    const [value, check] = key[result]
    Global.Shubha += check
    return {value, check}
}
const calculateShubha = (area: number): ReturnType => {
    if(!area) return defaultReturn;
    return {value: "", check: Global.Shubha > 5 ? 1 : 0}
}
const calculatePhala = (area: number): ReturnType => {
    if(!area) return defaultReturn;
    let value = Global.Phala == 1 ? "Madhyama" :
                Global.Phala == 2 ? "Uttama":
                "Adhama"
    let check = Global.Phala == 1 ? 2 :
                Global.Phala == 2 ? 1 :
                0
    return {value, check}
}