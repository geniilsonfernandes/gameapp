const apiKey = "?key=2f93b9a7bffb481a9ab214dcdb9530f0";

export const fetchBasic = async (id) => {
    const response = await fetch(`https://api.rawg.io/api/games/${id}${apiKey}`);
    const dados = await response.json();
    return dados;
  };

  const dados = {
    gamelist: async (list) => {
      return Promise.all(
       list.map(id=>fetchBasic(id))
      )
    },
    gameSigle: async (id) =>{
        return fetchBasic(id)
    }
  };
  
  export default dados;
  