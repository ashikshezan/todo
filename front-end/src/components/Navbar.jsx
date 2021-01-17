import React from 'react';

const Navbar = () => {
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-white">
                            <thead className="bg-gray-50">
                            </thead>
                            <tbody className="bg-indigo-700">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-16 w-16">
                                                <img className="h-16 w-16 rounded-full border" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt={'profile'} />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-2xl text-white font-light leading-normal">
                                                    Hello,<br />Louise!
                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-white text-6xl font-thin">
                                        13
            <div className="text-sm inline-block leading-normal"> <strong>Friday</strong> <br />December 4</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-white font-bold leading-normal">
                                        Events Today
            <ul className="font-thin text-xs py-2">
                                            <li>12:00 Title of Event</li>
                                            <li>12:50 Title of Event</li>
                                            <li>12:30 Title of Event</li>
                                        </ul>
                                    </td>
                                </tr>
                                {/* More rows... */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Navbar;