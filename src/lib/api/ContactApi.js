export const contactCreate = async (token, {firstName, lastName, email, phone}) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-API-TOKEN": token
    },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      email,
      phone
    })
  });
}

export const contactSearch = async (token, {name, email, phone, page}) => {
  const url = new URL(`${import.meta.env.VITE_API_PATH}/contacts`);
  if (name) url.searchParams.append("name", name);
  if (email) url.searchParams.append("email", email);
  if (phone) url.searchParams.append("phone", phone);
  if (page) url.searchParams.append("page", page);

  return await fetch(url, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "X-API-TOKEN": token
    }
  });
}

export const contactDetail = async (token, id) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${id}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "X-API-TOKEN": token
    }
  });
}

export const contactUpdate = async (token, {id, firstName, lastName, email, phone}) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-API-TOKEN": token
    },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      email,
      phone
    })
  });
}

export const contactDelete = async (token, id) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${id}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "X-API-TOKEN": token
    }
  });
}
