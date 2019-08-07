const API = {
    getJournalEntries() {
        return fetch("http://localhost:3000/entries")
            .then(entries => entries.json())
    },


    saveJournalEntry(newEntryObject) {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        })
    }

}

export default API