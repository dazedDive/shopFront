import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const menuStyle = [{id: 1,
              text: "Death Metal",
              link: "/deathmetal"
                },
              {id: 2,
              text: "Black Metal",
              link: "/blackmetal",
                },
              {id: 3,
              text: "Doom Metal",
              link: "/doommetal",
             }];
const menuUser = [{id: 1,
                  text: "login/register",
                  link: "/login"},
                  {id: 2,
                  text: "dashboard",
                  link: "/dashboard"},
                  {id: 3,
                  text: <Cart/>,
                  link: "/cart"}];

const NavBar = () => {
    return (
        <div className="bg-stone-700">
            <ul className="flex flex-row">
                {menuStyle.map(item=>{
                    return(
                        <Link
                        key={item.id}
                        to={item.link}
                        className="text-stone-100 text-3xl ml-10 pt-4 pb-3 hover:text-red-700 hover:scale-105 hover:cursor-pointer duration-100"
                        >{item.text}</Link>
                    )
                })}
            </ul>
            <ul className="flex flex-row justify-end">
                {menuUser.map(item=>{
                    return(
                        <Link
                        key={item.id}
                        to={item.link}
                        className="text-stone-400 text-xl mr-8 pt-4 pb-3 hover:text-red-700 hover:scale-105 hover:cursor-pointer duration-100"
                        >{item.text}</Link>
                    )
                })}

            </ul>
        </div>
    );
};

export default NavBar;