import BBSCardList from "@/components/BBSCardList";






//npm i @prisma/client インストール必要

export default async function Home() {
  // const response = await fetch("http://localhost:3000/api/post", {
  //   cache: "no-store",
  // });

  // const bbsAlldata = await response.json();
  // console.log(bbsAlldata);


  return (
    <main >
      <BBSCardList/>
    
    </main>
  );

  
}
