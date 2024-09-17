'use client';
import EspaceurHeader from "../_global_components/HeaderSpacer"
import { myInfos } from '@data/global/PersonalInformation'

export default function Contact() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];
  return (
    <>
      <EspaceurHeader />
      <div className="md:w-3/4 bg-slate-900 dark:bg-light md:rounded-xl m-auto my-8 md:p-6 p-3">
        <h1 className="text-4xl text-light dark:text-dark font-bold text-center mb-3">Contacte-<span className="text-secondary">moi</span></h1>
        <p className="text-center text-light dark:text-dark">Tu as un projet spécifique ? Tu souhaites signaler un problème ? Tu souhaites une collaboration ? N'hésite pas à utiliser ce formulaire !</p>
        <form className="md:w-1/2 m-auto my-10">
            <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-light dark:text-dark">Ton nom complet</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={myInfos.prenom + " " + myInfos.nom} required />
            </div> 
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-light dark:text-dark">Ton email</label>
                <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={myInfos.mail} required />
            </div> 
            <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-light dark:text-dark">L'objet de ta demande</label>
                <input type="text" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Création d'une solution digitale sur-mesure" required />
            </div> 
            <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-light dark:text-dark">Ton message</label>
                <textarea id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ton message" required />
            </div> 
            {/* <PlaceholdersAndVanishInput placeholders={placeholders} onChange={() => console.log("Hello")} onSubmit={(e) => {e.preventDefault; console.log("J'envoie")}
            } /> */}
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-light dark:text-dark">J'ai lu et accepte <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">les conditions d'utilisations du site</a>.</label>
            </div>
            <button type="submit" className="text-primary bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Envoyer mon message</button>
        </form>

      </div>
    </>

  );
}
