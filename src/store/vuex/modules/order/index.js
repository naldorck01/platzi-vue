const module_order = {
  actions: {
    async get_order_list() {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFkbWluX0dsb2JhbF8yIiwiaWF0IjoxNjc0NDEwOTEyfQ.4cXGpOQMR70zjTdze_YJF86cICBQx0cEZQnXXdEer3k"
      const url = "https://womdev-osrm.omnixsystem.com/v3/search/shipping_groups"

      const headers = {
        "Content-type": "application/json",
        Authorization: `${token}`,
      }

      const body = {
        from: 0,
        size: 10,
        sortBy: {
          orderCreationDate: "desc",
        },
      }

      const config = {
        method: "POST",
        body: JSON.stringify(body),
        headers: headers,
      }

      let res_order_list = await fetch(url, config)
      res_order_list = res_order_list.json()
      return res_order_list
    },
  },
}

export default module_order
