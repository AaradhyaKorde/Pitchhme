"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  const webD = [
    "/images/webd/greentoe.png",
    "/images/webd/indianwebshows.png",
    "/images/webd/jainshree.png",
    "/images/webd/ok7.png",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const contentCreation = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const socialMediaMarketing = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const memeMarketing = [
    "/images/memes/1.jpg",
    "/images/memes/aarya.jpg",
    "/images/memes/scam.jpg",
    "/images/memes/Iron.jpg",
    "/images/memes/meesho.jpg",
  ];
  return (
    <div className="py-40  flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Web Development
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Get your own{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Aesthetic and Robust
              </span>{" "}
              website now!
            </h4>
            <div className="flex justify-center items-center">
              {webD.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-10 w-18 md:h-20 md:w-36 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  E-commerce
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Portfolio
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Media-sharing website
                </span>
              </div>
              <div className="flex  items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
shopify                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  E-learning
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Business website

                </span>
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>

      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Content Creation
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Book your trip to{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Bali
              </span>{" "}
              now! ✈️
            </h4>
            <div className="flex justify-center items-center">
              {contentCreation.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  5 connecting flights
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  12 hotels
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  69 visiting spots
                </span>
              </div>
              <div className="flex  items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Good food everyday
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Open Mic
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Paragliding
                </span>
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>

      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Social Media Marketing
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Book your trip to{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Bali
              </span>{" "}
              now! ✈️
            </h4>
            <div className="flex justify-center items-center">
              {socialMediaMarketing.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  5 connecting flights
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  12 hotels
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  69 visiting spots
                </span>
              </div>
              <div className="flex  items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Good food everyday
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Open Mic
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Paragliding
                </span>
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>

      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Meme Marketing
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Book your trip to{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Bali
              </span>{" "}
              now! ✈️
            </h4>
            <div className="flex justify-center items-center">
              {memeMarketing.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  5 connecting flights
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  12 hotels
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  69 visiting spots
                </span>
              </div>
              <div className="flex  items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Good food everyday
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Open Mic
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Paragliding
                </span>
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}

