import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiCurrencyDollar, HiShoppingBag, HiOutlineClipboardList, HiUser } from 'react-icons/hi';

const SidebarCompo = () => {
    return (
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={''}>
                <span className="font-bold text-2xl">ADMIN</span>
              </Sidebar.Item>
              <Sidebar.Item href="/users" icon={HiUser}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href="/products" icon={HiShoppingBag}>
                Products
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiOutlineClipboardList}>
                Pemesanan
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiCurrencyDollar}>
                Uang Elektronik
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      );
    }

export default SidebarCompo