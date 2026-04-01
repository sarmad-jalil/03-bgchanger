import { useState } from 'react';

const App = () => {
	const colors = [
		{ name: 'Slate', value: '#1e293b', textColor: 'text-white' },
		{ name: 'Rose', value: '#e11d48', textColor: 'text-white' },
		{ name: 'Sky', value: '#0284c7', textColor: 'text-white' },
		{ name: 'Emerald', value: '#059669', textColor: 'text-white' },
		{ name: 'Purple', value: '#9333ea', textColor: 'text-white' },
		{ name: 'Amber', value: '#f59e0b', textColor: 'text-black' },
		{ name: 'Pink', value: '#ec4899', textColor: 'text-white' },
		{ name: 'Teal', value: '#0d9488', textColor: 'text-white' },
	];

	const [color, setColor] = useState<string>('#1e293b');

	const changeBg = (newColor: string) => {
		setColor(newColor);
	};

	return (
		<div 
			className="min-h-screen flex flex-col justify-center items-center p-8 transition-colors duration-700 ease-in-out relative"
			style={{ backgroundColor: color }}
		>
			{/* Content */}
			<div className="max-w-4xl w-full text-center">
				{/* Title */}
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)] tracking-tight animate-fade-in-down">
					Background Color Changer
				</h1>
				
				{/* Subtitle */}
				<p className="text-lg md:text-xl text-white/90 mb-12 drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)] animate-fade-in-up animation-delay-200">
					Click any color below to transform the background
				</p>
				
				{/* Button Container */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 p-6 md:p-8 bg-white/10 backdrop-blur-md rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/20 animate-fade-in-up animation-delay-400">
					{colors.map((colorItem) => (
						<button
							onClick={() => changeBg(colorItem.value)}
							key={colorItem.name}
							className={`
								group relative overflow-hidden
								px-4 py-6 rounded-2xl
								font-semibold border-3 border-transparent
								shadow-[0_4px_15px_rgba(0,0,0,0.2)]
								transition-all duration-300 ease-out
								hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]
								active:translate-y-0 active:scale-100
								flex flex-col gap-2
								${color === colorItem.value ? 'scale-105 shadow-[0_8px_25px_rgba(0,0,0,0.4),0_0_0_4px_rgba(255,255,255,0.3)] border-white/50' : ''}
								${colorItem.textColor}
							`}
							style={{ backgroundColor: colorItem.value }}
						>
							{/* Gradient overlay on hover */}
							<div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							
							{/* Content */}
							<span className="relative text-lg font-bold tracking-wide">
								{colorItem.name}
							</span>
							<span className="relative text-sm opacity-80 font-mono">
								{colorItem.value}
							</span>
						</button>
					))}
				</div>
			</div>
			
			{/* Footer */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)] animate-fade-in animation-delay-600">
				<p>Made with ❤️ using React, TypeScript & Tailwind CSS</p>
			</div>
		</div>
	);
};

export default App;
