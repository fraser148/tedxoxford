export function checkUser(userID) {
    return fetch('https://www.api.tedxoxford.co.uk/check/' + userID)
        .then(data => data.json())
}

export function getApplicants() {
    return fetch('https://www.api.tedxoxford.co.uk/applicants')
        .then(data => data.json())
}

export function getApplicant(id) {
    return fetch('https://www.api.tedxoxford.co.uk/applicant/'+id)
        .then(data => data.json())
}