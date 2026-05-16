export default function HomePage() {
  return (
    <main className='min-h-screen bg-white p-10'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-5xl font-bold'>
          Procurement Work AI
        </h1>

        <p className='mt-4 text-gray-600 text-lg'>
          Enterprise AI Tender Automation & BOQ Analysis Platform
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
          <div className='border rounded-xl p-6 shadow-sm'>
            <h2 className='font-semibold text-xl'>Tender Upload</h2>
            <p className='text-gray-500 mt-2'>
              Upload procurement documents and tender PDFs.
            </p>
          </div>

          <div className='border rounded-xl p-6 shadow-sm'>
            <h2 className='font-semibold text-xl'>AI BOQ Analysis</h2>
            <p className='text-gray-500 mt-2'>
              Detect abnormal pricing and rate deviations.
            </p>
          </div>

          <div className='border rounded-xl p-6 shadow-sm'>
            <h2 className='font-semibold text-xl'>AI Reports</h2>
            <p className='text-gray-500 mt-2'>
              Generate executive procurement analysis reports.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
