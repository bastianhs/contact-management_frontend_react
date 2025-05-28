export const addressCreate = async (token, contactId, {street, city, province, country, postalCode}) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${contactId}/addresses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-API-TOKEN": token
    },
    body: JSON.stringify({
      street,
      city,
      province,
      country,
      postal_code: postalCode
    })
  });
}

export const addressList = async (token, contactId) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${contactId}/addresses`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "X-API-TOKEN": token
    }
  });
}

export const addressDetail = async (token, contactId, addressId) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${contactId}/addresses/${addressId}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "X-API-TOKEN": token
    }
  });
}

export const addressUpdate = async (token, contactId, {addressId, street, city, province, country, postalCode}) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${contactId}/addresses/${addressId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-API-TOKEN": token
    },
    body: JSON.stringify({
      street,
      city,
      province,
      country,
      postal_code: postalCode
    })
  });
}

export const addressDelete = async (token, contactId, addressId) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${contactId}/addresses/${addressId}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "X-API-TOKEN": token
    }
  });
}
