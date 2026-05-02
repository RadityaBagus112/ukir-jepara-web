"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "../lib/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

type Review = {
  name: string;
  text: string;
  rating: number;
  createdAt?: any;
};

export default function RatingSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [filtered, setFiltered] = useState<Review[]>([]);
  const [filter, setFilter] = useState("all");

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔥 ambil data
  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));

    const unsub = onSnapshot(q, (snap) => {
      const data = snap.docs.map((doc) => doc.data() as Review);
      setReviews(data);
    });

    return () => unsub();
  }, []);

  // 🔥 sorting
  const sorted = [...reviews].sort((a, b) => {
    if (b.rating === a.rating) {
      return (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0);
    }
    return b.rating - a.rating;
  });

  // 🔥 filter logic
  useEffect(() => {
    if (filter === "all") {
      setFiltered(sorted);
    } else {
      setFiltered(sorted.filter((r) => r.rating === Number(filter)));
    }
  }, [reviews, filter]);

  // 🔥 auto slider
  useEffect(() => {
    if (filtered.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === filtered.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [filtered]);

  const featured = filtered[currentIndex];

  // submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !text) return;

    setLoading(true);

    await addDoc(collection(db, "reviews"), {
      name,
      text,
      rating,
      createdAt: serverTimestamp(),
    });

    setName("");
    setText("");
    setRating(5);

    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);

    setLoading(false);
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <h2 className="text-4xl text-center font-semibold mb-12">
          Review Pelanggan
        </h2>

        {/* 🔥 FILTER */}
        <div className="flex justify-center gap-3 mb-10">
          {["all", "5", "4"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full border ${
                filter === f
                  ? "bg-[#9EFF00]"
                  : "bg-white"
              }`}
            >
              {f === "all" ? "Semua" : `${f}⭐`}
            </button>
          ))}
        </div>

        {/* 🔥 SLIDER HIGHLIGHT */}
        <div className="mb-20 relative">
          <AnimatePresence mode="wait">
            {featured && (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-10 rounded-3xl shadow-xl text-center"
              >
                <p className="text-xl mb-4">
                  {featured.text}
                </p>

                <div className="text-yellow-400 mb-2">
                  {"⭐".repeat(featured.rating)}
                </div>

                <p className="font-semibold">{featured.name}</p>

                {featured.rating === 5 && (
                  <span className="text-xs text-green-500">
                    🏆 Top Review
                  </span>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow mb-16"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama"
            className="w-full p-3 border rounded mb-3"
          />

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Review"
            className="w-full p-3 border rounded mb-3"
          />

          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full p-3 border rounded mb-3"
          >
            <option value={5}>⭐⭐⭐⭐⭐</option>
            <option value={4}>⭐⭐⭐⭐</option>
          </select>

          <button className="w-full py-3 bg-[#9EFF00] rounded-full">
            {loading ? "Mengirim..." : "Kirim"}
          </button>

          {success && (
            <p className="text-green-500 text-center mt-2">
              ✔ Review berhasil!
            </p>
          )}
        </form>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.slice(1).map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-5 rounded-xl shadow"
            >
              <p className="text-yellow-400">
                {"⭐".repeat(r.rating)}
              </p>
              <p className="text-sm my-2">{r.text}</p>
              <p className="font-medium">{r.name}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}