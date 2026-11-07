import Stryker from "../assets/allbrands/01_Stryker.png";
import Storz from "../assets/allbrands/02_Storz.png";
import Olympus from "../assets/allbrands/03_Olympus.png";
import RichardWolf from "../assets/allbrands/04_Richard_Wolf.png";
import Drager from "../assets/allbrands/05_Drager.png";
import GE from "../assets/allbrands/06_GE.png";
import Maquet from "../assets/allbrands/07_Maquet.png";
import DetexOmeda from "../assets/allbrands/08_Detex_Omeda.png";
import Erbe from "../assets/allbrands/09_Erbe.png";

import Mindray from "../assets/allbrands/11_Mindray.png";
import Philips from "../assets/allbrands/12_Philips.png";
import Edan from "../assets/allbrands/13_Edan.png";
import BPL from "../assets/allbrands/14_BPL.png";
import Yonker from "../assets/allbrands/15_Yonker.png";
import Medtronic from "../assets/allbrands/16_Medtronic.png";
import Siemens from "../assets/allbrands/17_siemens.png";
import Smith from "../assets/allbrands/18_smith.png";
import Fresenius from "../assets/allbrands/19_fresenius.png";
import Fisher from "../assets/allbrands/20_fisher.png";
import Schiller from "../assets/allbrands/21_schiller.png";
import Johnson from "../assets/allbrands/22_johnson.png";
import Zoll from "../assets/allbrands/23_zoll.png";
import Braun from "../assets/allbrands/24_braun.png";

import Nidek from "../assets/allbrands/26_nidek.png";

function Manufacturers() {

    const brands = [
        {
            name: "STRYKER",
            image: Stryker
        },
        {
            name: "STORZ",
            image: Storz
        },
        {
            name: "OLYMPUS",
            image: Olympus
        },
        {
            name: "RICHARD WOLF",
            image: RichardWolf
        },
        {
            name: "DRÄGER",
            image: Drager
        },
        {
            name: "GE",
            image: GE
        },
        {
            name: "MAQUET",
            image: Maquet
        },
        {
            name: "DETEX OMEDA",
            image: DetexOmeda
        },
        {
            name: "ERBE",
            image: Erbe
        },
        
        {
            name: "MINDRAY",
            image: Mindray
        },
        {
            name: "PHILIPS",
            image: Philips
        },
        {
            name: "EDAN",
            image: Edan
        },
        {
            name: "BPL",
            image: BPL
        },
        {
            name: "YONKER",
            image: Yonker
        },
        {
            name: "MEDTRONIC",
            image: Medtronic
        },
        {
    name: "SIEMENS",
    image: Siemens
},
{
    name: "SMITH & NEPHEW",
    image: Smith
},
{
    name: "FRESENIUS",
    image: Fresenius
},
{
    name: "FISHER",
    image: Fisher
},
{
    name: "SCHILLER",
    image: Schiller
},
{
    name: "JOHNSON & JOHNSON",
    image: Johnson
},
{
    name: "ZOLL",
    image: Zoll
},
{
    name: "BRAUN",
    image: Braun
},

{
    name: "NIDEK",
    image: Nidek
},
    ];


    return (
        <section id="manufacturers" className="manufacturers">

            <div className="section-heading">

                <p className="section-tag">
                    OUR MANUFACTURERS
                </p>

                <h2>
                    Brands We Deal In
                </h2>

                <p>
                    We work with trusted healthcare equipment
                    manufacturers and medical brands.
                </p>

            </div>


            <div className="brands-grid">

                {brands.map((brand) => (

                    <div
                        className="brand-card"
                        key={brand.name}
                    >

                        <img
                            src={brand.image}
                            alt={brand.name}
                            className="brand-logo"
                        />

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Manufacturers;