import React, { useState } from 'react';

const Account = () => {
  const [activeTab, setActiveTab] = useState('pengaturan');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow-md rounded-md p-4 w-full max-w-md">
          <div className="flex items-center justify-center">
            <img
              src="https://i.imgur.com/sH6vD31.png"
              alt="Profile picture"
              className="w-20 h-20 rounded-full"
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold">Cynnnptr</h2>
          </div>
          <div className="mt-6">
            <div
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              role="tablist"
            >
              <div className="mr-2">
                <a
                  className="inline-block p-4 rounded-t-lg border-b-2 border-transparent active:text-indigo-600 active:border-indigo-500 hover:text-gray-700 hover:border-gray-300"
                  href="#"
                  onClick={() => handleTabChange('pengaturan')}
                >
                  Pengaturan Akun
                </a>
              </div>
              <div className="mr-2">
                <a
                  className="inline-block p-4 rounded-t-lg border-b-2 border-transparent active:text-indigo-600 active:border-indigo-500 hover:text-gray-700 hover:border-gray-300"
                  href="#"
                  onClick={() => handleTabChange('pesanan')}
                >
                  Pesanan Saya
                </a>
              </div>
              <div className="mr-2">
                <a
                  className="inline-block p-4 rounded-t-lg border-b-2 border-transparent active:text-indigo-600 active:border-indigo-500 hover:text-gray-700 hover:border-gray-300"
                  href="#"
                  onClick={() => handleTabChange('dompet')}
                >
                  Dompet Saya
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8">
            {activeTab === 'pengaturan' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Pengaturan Akun
                </h2>
                <p className="text-gray-500">
                  Ubah profil, alamat, password, dan lainnya.
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mt-4">
                  Ubah Profil</button>
              </div>
            )}
            {activeTab === 'pesanan' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Pesanan Saya
                </h2>
                <p className="text-gray-500">
                  Lihat semua pesanan Anda, termasuk yang belum dibayar, dikemas, dikirim, dan selesai.
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mt-4">
                  Lihat Riwayat Pesanan
                </button>
                <div className="mt-4">
                  <div className="flex flex-wrap -mb-px text-sm font-medium text-center">
                    <div className="mr-2">
                      <a
                        className="inline-block p-4 rounded-t-lg border-b-2 border-transparent active:text-indigo-600 active:border-indigo-500 hover:text-gray-700 hover:border-gray-300"
                        href="#"
                      >
                        Belum Bayar (1)
                      </a>
                    </div>
                    <div className="mr-2">
                      <a
                        className="inline-block p-4 rounded-t-lg border-b-2 border-transparent active:text-indigo-600 active:border-indigo-500 hover:text-gray-700 hover:border-gray-300"
                        href="#"
                      >
                        Dikemas (0)
                      </a>
                    </div>
                    <div className="mr-2">
                      <a
                        className="inline-block p-4 rounded-t-lg border-b-2 border-transparent active:text-indigo-600 active:border-indigo-500 hover:text-gray-700 hover:border-gray-300"
                        href="#"
                      >
                        Dikirim (0)
                      </a>
                    </div>
                    <div className="mr-2">
                      <a
                        className="inline-block p-4 rounded-t-lg border-b-2 border-transparent active:text-indigo-600 active:border-indigo-500 hover:text-gray-700 hover:border-gray-300"
                        href="#"
                      >
                        Beri Penilaian (0)
                      </a>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                      <div className="bg-white shadow-md rounded-md p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-gray-500">Pulsa, Tagihan & Tiket</p>
                          <p className="text-gray-800 font-semibold">Rp100.000</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <p className="text-gray-500">12 Maret 2024</p>
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">
                            Lihat Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'dompet' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Dompet Saya
                </h2>
                <p className="text-gray-500">
                  Saldo TFM saya:
                </p>
                <div className="mt-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                  <div className="bg-white shadow-md rounded-md p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-gray-500">Saldo saya</p>
                        <p className="text-gray-800 font-semibold">10.000</p>
                      </div>
                    </div>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mt-4">
                    Top Up Saldo
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;


