export default async function GetPropertiesById(id: string){
     
  const result = await fetch(`https://assinment4-gamma.vercel.app/api/properties/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const property = await result.json();

  console.log(property)
  return property
}