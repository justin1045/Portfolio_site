import React from 'react'

export default function More() {
  return (
      <div className="p-6 min-h-screen" id="more">
        <h2 className="text-3xl font-bold mb-4">🚀 More About Me</h2>
  
        <section className="mb-6">
          <h3 className="text-xl font-semibold">🛤️ My Tech Journey</h3>
          <p className="text-gray-700">
            I started coding in [Year], initially exploring [Tech/Language]. Over time, I got into web development and fell in love with building beautiful, responsive UIs using React. Currently, I’m expanding into backend and AI projects!
          </p>
        </section>
  
        <section className="mb-6">
          <h3 className="text-xl font-semibold">🎯 Values That Drive Me</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Consistency over perfection</li>
            <li>Curiosity-driven learning</li>
            <li>Helping others grow</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h3 className="text-xl font-semibold">🎮 Hobbies & Interests</h3>
          <p className="text-gray-700">
            When I'm not coding, you’ll find me playing [Game], watching [Genre] series, or exploring new tech on GitHub. I also enjoy writing and occasional design experiments.
          </p>
        </section>
  
        <section>
          <h3 className="text-xl font-semibold">🛠 Favorite Tools</h3>
          <div className="flex flex-wrap gap-3 mt-2">
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">VS Code</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Git & GitHub</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Figma</span>
          </div>
        </section>
      </div>
    );
}
