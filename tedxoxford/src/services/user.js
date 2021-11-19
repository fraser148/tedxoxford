export function checkUser(userID) {
    return fetch('http://localhost:3001/check/' + userID)
        .then(data => data.json())
}

export function getApplicants() {
    return fetch('http://localhost:3001/applicants')
        .then(data => data.json())
}

export function getApplicant(id) {
    return fetch('http://localhost:3001/applicant/'+id)
        .then(data => data.json())
}