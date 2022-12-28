export default function InternalCampign() {
  return (
    <div className="sm:py-8 lg:py-12 container mx-auto">
      <div className="flex items-center justify-center">
        <div data-testid="size" className="flex bg-zinc-200 border border-zinc-300 sm:h-[250px] sm:w-[500px] lg:h-[250px] lg:w-[670px] xl:h-[250px] xl:w-[970px]">
            <div className='text-center m-auto text-2xl font-semibold text-gray-500'>
                <p>Horizontal 970x250</p>
                <p>(Internal campaign only)</p>
            </div>
        </div>
      </div>
    </div>
  )
}
