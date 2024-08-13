function App() {
	return (
		<section className='flex px-6 font-Figtree text-gray-950 justify-center items-center w-screen h-screen bg-yellowFM'>
			<div className='flex flex-col gap-6 p-6 border-[1px] max-w-[384px]  border-gray-950 bg-white rounded-[20px] drop-shadow-[8px_8px_0_rgba(0,0,0,100)]'>
				<img
					className='rounded-[10px] min-w-[279px] '
					src={'./illustration-article.svg'}
					alt='svg logo card'
				/>

				<div className="flex flex-col gap-3">
					<span className="px-3 w-fit py-1 bg-yellowFM rounded font-extrabold text-[12px] sm:text-sm">Learning</span>
					<p className="text-[12px] sm:text-sm font-medium ">Published 21 Dec 2023</p>
					<h2 className="text-[20px] sm:text-2xl font-extrabold hover:text-yellowFM cursor-pointer">HTML & CSS foundations</h2>
					<p className="text-sm  sm:text-base leading-[1.5] font-medium text-gray-500 ">These languages are the backbone of every website, defining structure, content, and presentation.</p>
				</div>

				<div className='flex items-center'>
					<img className="w-8"
						src={'./image-avatar.webp'}
						alt='creator avatar'
					/>
					<span className="ml-3 text-sm font-extrabold">Greg Hooper</span>
				</div>
			</div>
		</section>
	);
}

export default App;
