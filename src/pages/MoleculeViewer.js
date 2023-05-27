import CommentComponent from '@/components/CommentComponent';
import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function MoleculeViewer() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <Link href="/" offset={-65}>
          <div className="flex items-center text-cyan-600 mb-6">
            <FaArrowLeft className="mr-2 text-2xl" />
            <span className="text-xl">Back</span>
          </div>
        </Link>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-semibold mb-4 text-cyan-600">Molecule Viewer</h1>
          <p className="text-gray-600 mb-8 leading-8">
            Welcome, this is a molecule viewer web application that I created as a part of my education at the University of Guelph. In this app you can add and remove elements, upload molecule files, and view those molecule in the browser.
          </p>

          <div className="aspect-w-16 aspect-h-24 mb-8">
            <video src="/Fireflyght.mov" controls></video>
          </div>

          <h3 className="mb-8">
            Feel free to{' '}
            <a href="https://github.com/SimonasTamkevicius/Fireflyght-Game" className="text-cyan-500">
              download
            </a>{' '}
            and experiment with it yourself!
          </h3>

          <div className="bg-cyan-100 rounded-lg border-4 border-cyan-600 p-8 md:p-10">
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            <CommentComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

