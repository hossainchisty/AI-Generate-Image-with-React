export default function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <div className='w-full max-w-xs md:max-w-lg cursor-pointer text-white'>
        <input
          autoFocus
          type='text'
          placeholder='Search...'
          className='w-full p-3 mb-4 bg-black rounded-full shadow-lg focus:outline-none focus:shadow-outline auto'
        />
      </div>
      <div className='flex justify-center'>
        <img
          src='https://cdn.pixabay.com/photo/2023/03/28/13/28/ai-generated-7883147_1280.jpg'
          alt='Image 1'
          className='w-25 h-24 mx-2 rounded-lg border border-gray-300'
        />
        <img
          src='https://images.nightcafe.studio/jobs/910GCEMCLQiFaAGGKpmx/910GCEMCLQiFaAGGKpmx--2--hecfw_15.625x.jpg?tr=w-1600,c-at_max'
          alt='Image 2'
          className='w-25 h-24 mx-2 rounded-lg border border-gray-300'
        />
        <img
          src='https://cdn.pixabay.com/photo/2024/02/01/03/15/ai-generated-8545189_1280.png'
          alt='Image 3'
          className='w-25 h-24 mx-2 rounded-lg border border-gray-300'
        />
        <img
          src='https://images.squarespace-cdn.com/content/v1/60da2a060458516d04fb196a/3a9fc852-5058-451e-a992-f828974d1b6b/AI+Art+cute+cat+kitten.jfif'
          alt='Image 3'
          className='w-25 h-24 mx-2 rounded-lg border border-gray-300'
        />
      </div>
    </div>
  );
}
