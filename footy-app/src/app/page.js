import Image from "next/image";


export default function Home() {
  return (
    <div class="bg-[#fcc165] md:h-screen">
      <header class="bg-[#ffb141] flex justify-center min-h-12">
        <img class="" src="/img/default.png"  width={100}height={100}  />
       </header>
        <main>
          <section class="flex flex-col gap-5 pb-10 pt-10">
            <div class="flex justify-center text-3xl">
              <h2>Search your favorite soccer players</h2>
            </div>
            <section class="flex justify-center">
              <input class="border rounded" placeholder="Search" type="text" name="player"/>
                <button class="bg-[#DCFB14] hover:bg-[#ecdc2c] border rounded" type="button" id="search">Search</button>
            </section>
          </section>
          <section class="">
            <section class="grid grid-cols-1 md:grid-cols-2 p-10">
              <div class="flex justify-center md:justify-end">
                <img id="playerImage" src="/img/main-img.jpg"  width={400} height={400} alt="player" />
              </div>
              <div class="bg-[#fccc85] w-full md:w-1/2">
               <h5 class="font-sans text-2xl p-5" id="playerName">John Butler</h5>
              <table class="border-separate border-spacing-8">
                <tbody>
                  <tr>
                    <td>Birth Date</td>
                    <td id="birthDate">1995-10-11</td>
                  </tr>
                  <tr>
                   <td>Country</td>
                   <td id="playerNation">England</td>
                  </tr>
                  <tr>
                    <td>Club</td>
                    <td id="team">Oakbury FC</td>
                  </tr>
                  <tr>
                  < td>Position</td>
                    <td id="position">Left Winger</td>
                  </tr>
                  <tr>
                    <td>Number</td>
                    <td id="jersey">11</td>
                  </tr>
                  <tr>
                    <td>Dominant Foot</td>
                    <td id="foot">Right</td>
                  </tr>
               </tbody>
            </table>
        </div>
      </section>
    </section>
      <script src="/js/player.js"></script>
      </main>
    </div>
  );
}

