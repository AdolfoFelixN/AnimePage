import'bootstrap-icons/font/bootstrap-icons.css'
export const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="flex flex-row justify-between px-24 py-6">
        <div className="leftSide">
          <h2 className="text-red-700 text-4xl font-bold">More content</h2>
          <div className="categories flex flex-row text-lg my-4">
            <div className="text-white flex flex-col">
              <a href="#" className='mt-2'>Anime</a>
              <a href="#" className='mt-2'>Movies</a>
              <a href="#" className='mt-2'>Series</a>
            </div>
            <div className="text-white flex flex-col ml-28">
              <a href="#" className='mt-2'>Cartoons</a>
              <a href="#" className='mt-2'>TV Shows</a>
              <a href="#" className='mt-2'>Sports</a>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <h2 className="text-red-700 text-4xl font-bold">Social media</h2>
          <ul className='flex justify-evenly mt-5 text-3xl'>
            <li>
                <a href="https://github.com/">
                    <i className="bi bi-github text-white"></i>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/">
                    <i className="bi bi-instagram text-red-500"></i>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/">
                    <i className="bi bi-facebook text-blue-700"></i>
                </a>
            </li>
            <li>
                <a href="https://www.twitter.com/">
                    <i className="bi bi-twitter text-blue-400"></i>
                </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
