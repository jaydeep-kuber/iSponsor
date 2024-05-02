async function handleGetallSponsor(req ,res){
    const allSponsor = await Sponsor.find()
    return res.json(allSponsor)
}

module.exports = { 
    handleGetallSponsor 
}