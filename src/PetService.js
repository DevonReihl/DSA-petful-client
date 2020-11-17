import config from './config'

const ApiService = {
  getPets() {
    return fetch(`${config.API_ENDPOINT}/pets`)
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        )

  },
  getPeople() {
    return fetch(`${config.API_ENDPOINT}/people`)
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },

  addPerson(name) {
    return fetch(`${config.API_ENDPOINT}/people`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({person: name,}),
    })
        .then(res =>
            (!res.ok) 
                ? res.json().then((e) => Promise.reject(e)) 
                : res.json()
        )
  },
  
  removePersonAndPet(type) {
    return fetch(`${config.API_ENDPOINT}/pets/${type}`, {
      method: 'DELETE',
    })
    .then(res =>
      (!res.ok) 
          ? res.json().then((e) => Promise.reject(e)) 
          : res.json()
  )

  }


}

export default ApiService