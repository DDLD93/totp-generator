.then(() => {
    items.forEach((e) => {
        console.log(e);
        const object = e
        fetch(`http://localhost:5500/auth/${e.key}`).then(async(response) => {
            //var temdata = JSON.parse(response)
            response.text().then((e) => {
              object.code = e
              items.push(object)
            })
           await setUser(user => ([{...user, items}]))
      })
       
         })
         console.log(user);
        console.log('second then');
      })  