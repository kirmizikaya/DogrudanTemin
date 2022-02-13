import React, { useState ,useEffect } from "react";

import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";
import { AutoComplete } from 'primereact/autocomplete';
import { IdareService } from './service/IdareService';
  


import { RadioButton } from "primereact/radiobutton";

export const AppMenu = (props) => {
    const [value1, setValue1] = useState("");
    const [loading1, setLoading1] = useState(false);
    const [yearSelectedItems, setYearSelectedItems] = useState(null);
    const [dtTur, setDtTur] = useState(null);
    const [dtDurum, setDtDurum] = useState(null);
    const [date1, setDate1] = useState(null);
    const [il, setIl] = useState(null);
    const [kapsam, setKapsam] = useState(null);
    const idareservice = new IdareService();
    const [idareler, setIdareler] = useState([]);
    const [seciliIdare, setSeciliIdare] = useState(null);
    const [filtreliIdareler, setfiltreliIdareler] = useState(null);


    const years = [{ label: "2022", value: "2022" }];

    const dtDurumlari = [
        { label: "Doğrudan Temin Duyurusu Yayınlanmış", value: "1" },
        { label: "Teklifler Değerlendiriliyor", value: "2" },
    ];

    const iller = [
        { label: "Kahramanmaraş", value: "1" },
        { label: "Ankara", value: "2" },
    ];

    const kapsamlar = [
        { label: "İstisna", value: "1" },
        { label: "4734 Kapsamında", value: "2" },
    ]

    const onLoadingClick1 = () => {
        setLoading1(true);

        setTimeout(() => {
            setLoading1(false);
        }, 2000);
    };

    const searchIdare = (event) => {
        fetch('/')
        .then(res => res.json())
        .then(res => {
            console.log('Output: ', res);
        });
    }

   
    useEffect(() => {
        console.log(seciliIdare);
        if(seciliIdare != null) idareservice.getIdareler(seciliIdare).then(data => setIdareler(data));
    }, [seciliIdare]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        
        <div className="layout-menu-container">
            <InputText value={value1} onChange={(e) => setValue1(e.target.value)} placeholder="Doğrudan Temin Bilgileri" />

            <Divider type="dashed" />
            <div className="flex flex-row flex-wrap">
                <div className="col-6 flex align-items-center justify-content-center">
                    <Dropdown style={{ width: "100%" }} showClear value={yearSelectedItems} options={years} onChange={(e) => setYearSelectedItems(e.value)} placeholder="Yıl Seçiniz" />
                </div>
                <div className="col-2 flex align-items-center justify-content-center">
                    <Divider layout="vertical">
                        <b>DT</b>
                    </Divider>
                </div>
                <div className="col-4 flex align-items-center justify-content-center">
                    <InputText style={{ width: "100px" }} value={value1} onChange={(e) => setValue1(e.target.value)} placeholder="DT No" />
                </div>
            </div>

            <Divider type="dashed" />

            <Button style={{ width: "100%" }} loading={loading1} onClick={onLoadingClick1} label="Filtrele" className="p-button-success" />

            {/* Doğrudan Temin Türü */}

            <div className="text-s mt-3 mb-3 font-medium">Doğrudan Temin Türü</div>
            <div className="grid">
                <div className="col-6">
                    <div className="field-radiobutton">
                        <RadioButton inputId="mal" name="dtTur" value="Mal" onChange={(e) => setDtTur(e.value)} checked={dtTur === "Mal"} />
                        <label htmlFor="mal" className="text-blue-400">
                            {" "}
                            Mal{" "}
                        </label>
                    </div>
                    <div className="field-radiobutton">
                        <RadioButton inputId="yapim" name="dtTur" value="Yapım" onChange={(e) => setDtTur(e.value)} checked={dtTur === "Yapım"} />
                        <label htmlFor="yapim" className="text-yellow-400">
                            Yapım
                        </label>
                    </div>
                </div>
                <div className="col-6">
                    <div className="field-radiobutton">
                        <RadioButton inputId="hizmet" name="dtTur" value="Hizmet" onChange={(e) => setDtTur(e.value)} checked={dtTur === "Hizmet"} />
                        <label htmlFor="hizmet" className="text-pink-400">
                            Hizmet
                        </label>
                    </div>
                    <div className="field-radiobutton">
                        <RadioButton inputId="danismanlik" name="dtTur" value="Danışmanlık" onChange={(e) => setDtTur(e.value)} checked={dtTur === "Danışmanlık"} />
                        <label htmlFor="danismanlik" className="text-teal-400">
                            Danışmanlık
                        </label>
                    </div>
                </div>
            </div>

            <Divider type="dashed" />

            {/* Doğrudan Temin durumu */}

            <div className="text-s mt-3 mb-3 font-medium">Doğrudan Temin Durumu</div>
            <div>
                <Dropdown style={{ width: "100%" }} showClear value={dtDurum} options={dtDurumlari} onChange={(e) => setDtDurum(e.value)} placeholder="Doğrudan Temin Durumu Seçiniz" />
            </div>
            <Divider type="dashed" />
            {/* Doğrudan Temin Maddesi */}

            <div className="text-s mt-3 mb-3 font-medium">Doğrudan Temin Maddesi</div>
            <div>
                <Dropdown style={{ width: "100%" }} showClear value={dtDurum} options={dtDurumlari} onChange={(e) => setDtDurum(e.value)} placeholder="Doğrudan Temin Maddesi Seçiniz" />
            </div>
            <Divider type="dashed" />
            {/* Tekliflerin Verileceği Tarih Aralığı */}
            <div className="text-s mt-3 mb-3 font-medium">Tekliflerin Verileceği Tarih Aralığı</div>
            <div className="grid">
                <div className="col-6">
                    <Calendar placeholder="Başlangıç Tarihi" value={date1} onChange={(e) => setDate1(e.value)} showIcon />
                </div>
                <div className="col-6">
                    <Calendar placeholder="Bitiş Tarihi" value={date1} onChange={(e) => setDate1(e.value)} showIcon />
                </div>
            </div>
            <Divider type="dashed" />
            {/* Doğrudan Temini Yapan İdarenin İli */}
            <div className="text-s mt-3 mb-3 font-medium">Doğrudan Temini Yapan İdarenin İli </div>
            <div>
                <Dropdown style={{ width: "100%" }} showClear value={il} filter filterBy="label" options={iller} onChange={(e) => setIl(e.value)} placeholder="Lütfen İl Seçiniz" />
            </div>
            <Divider type="dashed" />
             {/* Doğrudan Temin Kapsamı */}
             <div className="text-s mt-3 mb-3 font-medium">Doğrudan Temin Kapsamı</div>
             <div>
                <Dropdown style={{ width: "100%" }} showClear value={kapsam}   options={kapsamlar} onChange={(e) => setKapsam(e.value)} placeholder="Lütfen Kapsam Seçiniz" />
            </div>
            <Divider type="dashed" />
             {/* Doğrudan Temini Yapan   */}
             <div className="text-s mt-3 mb-3 font-medium">Doğrudan Temini Yapan İdare</div>
             <div>
             <AutoComplete value={seciliIdare} suggestions={filtreliIdareler} completeMethod={searchIdare} field="name" onChange={(e) => setSeciliIdare(e.value)} />
            </div>
        </div>
    );
};
