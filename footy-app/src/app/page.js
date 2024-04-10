import Image from "next/image";


export default function Home() {
  return (
    <main>
      <header>
        <h1>Footy</h1>
          </header>
      <section>
      <input type="text" name="player"/>
      <button type="button" id="search">Search</button>
      </section>
      <section>
        <Image 
        id="playerImage" 
        src=""  
        width={500}
        height={500} 
        alt="" />
        <h5>Name:</h5>
        <p id="playerName"></p>
      </section>
      <script src="/js/player.js"></script>
        </main>
  );
}

