"use client"
const people = [
  {
    name: '案件A',
    title: '株式会社〇〇',
    department: '派遣社員',
    email: '愛知県名古屋市中川区',
    role: 'タバコ禁止',
    startDate: '2023年1月1日',
    endDate: '2023年1月2日',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: '案件B',
    title: '株式会社〇〇',
    department: '正社員',
    email: '愛知県名古屋市中区',
    role: 'トイレなし',
    startDate: '2023年1月1日',
    endDate: '2023年1月2日',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: '案件C',
    title: '株式会社〇〇',
    department: '派遣社員',
    email: '愛知県名古屋市栄区',
    role: '飲食禁止',
    startDate: '2023年1月1日',
    endDate: '2023年1月2日',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: '案件D',
    title: '株式会社〇〇',
    department: '派遣社員',
    email: '愛知県名古屋市瑞穂区',
    role: 'タバコ禁止',
    startDate: '2023年1月1日',
    endDate: '2023年1月2日',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: '案件E',
    title: '株式会社〇〇',
    department: '派遣社員',
    email: '愛知県名古屋市熱田区',
    role: '飲食禁止',
    startDate: '2023年1月1日',
    endDate: '2023年1月2日',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function Team() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">案件一覧</h1>
          <p className="mt-2 text-sm text-gray-700">
            こちらから案件の一覧を閲覧できます
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            ＋案件を追加
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    案件名
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    現場住所
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    期間
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    備考
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="">
                          <div className="font-medium text-gray-900">{person.name}</div>
                          <div className="mt-1 text-gray-500">{person.title}様</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <div className="text-gray-900">{person.email}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <div className="text-gray-900">{person.startDate}〜{person.endDate}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{person.role}</td>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        編集<span className="sr-only">, {person.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
