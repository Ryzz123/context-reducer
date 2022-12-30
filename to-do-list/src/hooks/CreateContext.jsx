export default function Section({level, children}) {
    return (
        <section className="section">
            {/* Di sini component section akan menyediakan */}
            {/* LevelContext untuk digunakan oleh komponen anak-anaknya */}
            {/* Children component */}
            <LLevelContext.Provider value={level}>
                {children}
            </LLevelContext.Provider>
        </section>
    )
}


<Section>
    {/* Children = Di Dalam suatu component, kita bisa memeberikan suatu component lainnya / elemen lainnya */}
    {/* berdasarkan posisi "children" */}

    {/* HOC = Higher Order Component */}
    {/* slot yang legal ! */}
    <h1>Menuliskan Sesuatu</h1>
</Section>