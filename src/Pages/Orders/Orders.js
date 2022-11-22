import React from 'react';

const Orders = () => {
    return (
        <div class="container p-2 mx-auto sm:p-4 dark:dark:text-gray-100">
	<h2 class="mb-4 text-2xl font-semibold leading-tight">All the orders of books</h2>
	<div class="overflow-x-auto">
		<table class="w-full p-6 text-xs text-left whitespace-nowrap">
			{/* <colgroup>
				<col class="w-5">
				<col>
				<col>
				<col>
				<col>
				<col>
				<col class="w-5">
			</colgroup> */}
			<thead>
				<tr class="dark:dark:bg-gray-700">
					<th class="p-3">Name</th>
					<th class="p-3">Job title</th>
					<th class="p-3">Phone</th>
					<th class="p-3">Email</th>
					<th class="p-3">Address</th>
					<th class="p-3">
						<span class="sr-only">Edit</span>
					</th>
				</tr>
			</thead>
			<tbody class="border-b dark:dark:bg-gray-900 dark:dark:border-gray-700">
				<tr>
					<td class="px-3 py-2">
						<p>Dwight Adams</p>
					</td>
					<td class="px-3 py-2">
						<span>UI Designer</span>
						<p class="dark:dark:text-gray-400">Spirit Media</p>
					</td>
					<td class="px-3 py-2">
						<p>555-873-9812</p>
					</td>
					<td class="px-3 py-2">
						<p>dwight@adams.com</p>
					</td>
					<td class="px-3 py-2">
						<p>71 Cherry Court, SO</p>
						<p class="dark:dark:text-gray-400">United Kingdom</p>
					</td>
					<td class="px-3 py-2">
						<button type="button" title="Open details" class="p-1 rounded-full dark:dark:text-gray-600 hover:dark:dark:bg-gray-700 focus:dark:dark:bg-gray-700">
							<svg viewBox="0 0 24 24" class="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
         );
};

                                    export default Orders;