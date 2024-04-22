import Image from "next/image";


export default function Home() {
  return (
    <main class="">
      <header class="bg-[#ffb141] flex justify-center">
        <img class="" src="/img/default.png"  width={200}
        height={200}  />
          </header>
      <section class="bg-red-300">
        <section>
        <input type="text" name="player"/>
      <button class="bg-blue-300" type="button" id="search">Search</button>
        </section>
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

