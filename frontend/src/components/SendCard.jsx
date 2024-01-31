import SearchBar from './SearchBar'

export default function SendCard() {
  return (
    <div className="bg-white min-h-[400px] max-w-[338px] shadow-2xl">
        <div className="text-center  pt-10">
            <h1 className="text-2xl font-bold">Send Money</h1>
        </div>
        <div className='w-[90%] mx-auto mt-5 p-5'>
          <div>
            <div className='flex gap-5 items-center'>
              <div>card</div>
              <div className='text-xl font-semibold'>Deepak mehra</div>
            </div>
              <p className='mt-3 font-semibold'>Amount (in Rs)</p>
              <SearchBar placeholder={"Enter Amount"} type={"number"}/>

              <button className='mt-3 bg-[#21c55d] w-full h-10 rounded-lg text-[#e7f8ed]'>Initate transiction</button>
            
          </div>

            
        </div>
    </div>
  )
}
