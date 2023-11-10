import type { SystemTexts } from "./SystemTypes";
import MainColor from "../Components/Scalable/SettingsOptions/MainColor.svelte";
import Theme from "../Components/Scalable/SettingsOptions/Theme.svelte";
import Transparency from "../Components/Scalable/SettingsOptions/Transparency.svelte";
import BackgroundSelector from "../Components/Scalable/SettingsOptions/BackgroundSelector.svelte";
import img1 from '/wallpapers/1.png';
import img2 from '/wallpapers/2.png';
import img3 from '/wallpapers/3.png';
import img4 from '/wallpapers/4.png';
import img5 from '/wallpapers/5.png';
import img6 from '/wallpapers/6.png';
import img7 from '/wallpapers/7.png';
import img8 from '/wallpapers/8.png';
import img9 from '/wallpapers/9.png';
import img10 from '/wallpapers/10.png';
import img11 from '/wallpapers/11.png';
import img12 from '/wallpapers/12.png';
import img13 from '/wallpapers/13.png';
import img14 from '/wallpapers/14.png';
function SystemState() {

    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14
    ]
    const pt: SystemTexts = {
        config: {
            title: "configurações",
            options: [
                {
                    title: "Cor de destaque"
                },
                {
                    title: "Tema",
                    options: ["escuro", "claro"]
                },
                {
                    title: "Transparência"
                },
                {
                    title: "Papel de parede"
                }
            ]
        },
        boot: [
            "inicializando o sistema ...",
            "carregando variaveis de ambiente ...",
            "criando usuário ...",
            "conectando banco de dados ...",
            "carregando interface gráfica ...",
        ],
        login: {
            mobileMessage: "Pressione ou deslize para cima",
            desktopMessage: "Pressione qualquer tecla ou deslize para cima"
        }
    }
    const en: SystemTexts = {
        config: {
            title: "settings",
            options: [
                {
                    title: "accent color"
                },
                {
                    title: "theme",
                    options: ["dark", "light"]
                },
                {
                    title: "transparency"
                },
                {
                    title: "wallpaper"
                }
            ]
        },
        boot: [
            "booting up system",
            "loading environment variables",
            "creating user",
            "connecting databases",
            "loading GUI"
        ],
        login: {
            mobileMessage: "Press or swipe up to unlock",
            desktopMessage: "Press any key or swipe up to unlock"
        }
    }
    const texts = {
        pt, 
        en
    }
    const settingsOptions = [
        MainColor,
        Theme,
        Transparency,
        BackgroundSelector
    ]

    return {
        texts,
        images,
        settingsOptions
    }
}

export default SystemState()