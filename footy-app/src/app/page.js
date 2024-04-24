import Image from "next/image";


export default function Home() {
  return (
    <main class="bg-[#fcc165] mb-0 md:h-screen">
      <header class="bg-[#ffb141] flex justify-center">
        <img class="" src="/img/default.png"  width={100}height={100}  />
       </header>
      <section class="flex flex-col gap-5 p-10">
          <div class="flex justify-center text-3xl">
            <h2>Search your favorite soccer players</h2>
          </div>
          <section class="flex justify-center">
            <input type="text" name="player"/>
              <button class="bg-blue-300 border rounded" type="button" id="search">Search</button>
          </section>
      </section>
       <section class="">
          <section class="grid grid-cols-1 md:grid-cols-2 p-10">
            <div class="flex justify-center md:justify-end">
            <Image 
              id="playerImage" 
              src=""  
              width={400}
              height={400} 
              alt="" />
            </div>
        <div class="bg-green-300 w-full md:w-1/2">
          <h5 class="font-sans text-2xl p-5" id="playerName">Name</h5>
            <table class="border-separate border-spacing-8">
              <tbody>
                <tr>
                  <td>Birth Date</td>
                  <td id="birthDate"></td>
               </tr>
                <tr>
                  <td>Country</td>
                  <td id="playerNation"></td>
                </tr>
                <tr>
                  <td>Club</td>
                  <td id="team"></td>
                 </tr>
                <tr>
                  <td>Position</td>
                  <td id="position"></td>
                </tr>
                 <tr>
                  <td>Number</td>
                  <td id="jersey"></td>
                   </tr>
                 <tr>
                   <td>Dominant Foot</td>
                   <td id="foot"></td>
                 </tr>
               </tbody>
            </table>
        </div>
      </section>
    </section>
      <script src="/js/player.js"></script>
      <footer class="bg-green-300 h-3/5"></footer>
        </main>
  );
}

