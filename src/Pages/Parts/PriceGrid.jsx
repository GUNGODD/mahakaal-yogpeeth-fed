import React from 'react'

const PriceGrid = () => {
  return (
    <div>
        {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<div className="overflow-x-auto p-20">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Availability</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Shared</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Private</th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">01-07-2024</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">05 seats left</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$500</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$600</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            Enroll Now!
          </a>
        </td>
      </tr>

      <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">01-07-2024</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">05 seats left</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$500</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$600</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            Enroll Now!
          </a>
        </td>
      </tr>

      <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">01-07-2024</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">05 seats left</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$500</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$600</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            Enroll Now!
          </a>
        </td>
      </tr>
      <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">01-07-2024</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">05 seats left</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$500</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$600</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            Enroll Now!
          </a>
        </td>
      </tr>
      <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">01-07-2024</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">05 seats left</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$500</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$600</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            Enroll Now!
          </a>
        </td>
      </tr>
      <tr>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">01-07-2024</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">05 seats left</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$500</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$600</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            Enroll Now!
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}

export default PriceGrid