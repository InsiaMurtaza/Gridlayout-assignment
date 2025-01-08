export default function home(){
  return (
    <div className="grid grid-col grid-row gap-10 mx-20 my-20">
    <div className="bg-cyan-400 text-center content-normal font-bold">AG1 2 0f 10</div>
    <div className="bg-yellow-200 text-center content-normal font-bold">AG2 6 of 10
    <div className="grid grid-cols-2 grid-row1 gap-10"> 
    <div className="col-span-2"></div> 
    <div className="bg-pink-400 text-center content-normal font-bold">AG4 3 of 6</div>
    <div className="bg-pink-400 text-center content-normal font-bold">AG5 3 of 6</div>
    </div>
    <div className="grid grid-cols-3 grid-row2 gap-x-10">
      <div className="row-span-3 bg-orange-400 text-center content-normal font-bold">AG6 2 of 6</div>
      <div className="bg-yellow-300 col-span-2 text-center content-normal font-bold">AG7 4 of 6
      <div className="grid grid-cols-2 grid-row3 gap-x-6 my-12">
      <div className="bg-pink-400 text-center content-normal font-bold">AG8 2 of 4</div>
      <div className="bg-pink-400 text-center content-normal font-bold">AG9 2 of 4</div>
      <div className="col-span-2 bg-purple-300 text-center content-normal font-bold">AG10 auto</div>
      </div>
      </div>
      </div>
    </div>
    <div className="bg-cyan-400 text-center content-start font-bold">AG3 2 0f 10</div>
    </div>

    
    
  )
}