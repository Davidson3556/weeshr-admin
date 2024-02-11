<template>
  <div class="container mx-auto p-4">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-2xl font-semibold">Permission Page</h2>
      <router-link to="/" class="text-blue-500">Back to Home</router-link>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Role Selection -->
      <div>
        <h3 class="text-lg font-semibold mb-2">Select Role</h3>
        <select v-model="selectedRole" class="w-full p-2 border rounded">
          <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.roleName }}</option>
        </select>
      </div>

      <!-- Permissions Table -->
      <div class="col-span-2">
        <h3 class="text-lg font-semibold mb-2">Permissions</h3>
        <table class="w-full border border-collapse">
          <thead>
            <tr class="bg-gray-200">
              <th class="p-2">Resource Name</th>
              <th class="p-2">Read</th>
              <th class="p-2">Create</th>
              <th class="p-2">Update</th>
              <th class="p-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(resource, index) in resources" :key="index">
              <td class="p-2">{{ resource.resourceName }}</td>
              <td class="p-2"><input type="checkbox" v-model="resource.read" /></td>
              <td class="p-2"><input type="checkbox" v-model="resource.create" /></td>
              <td class="p-2"><input type="checkbox" v-model="resource.update" /></td>
              <td class="p-2"><input type="checkbox" v-model="resource.delete" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Assign Button -->
    <div class="mt-4">
      <button @click="assignPermissions" class="bg-blue-500 text-white px-4 py-2 rounded">
        Assign Permissions
      </button>
    </div>
  </div>
</template>


  
<script>
export default {
  data() {
    return {
      roles: [
        { id: 1, roleName: 'Super Admin' },
        { id: 2, roleName: 'Admin' },
        { id: 3, roleName: 'Editor' },

      ],
      selectedRole: 1,
      resources: [
        { resourceName: 'View Employees', read: false, create: false, update: false, delete: false },
        { resourceName: 'View Subcription History', read: false, create: false, update: false, delete: false },
        { resourceName: 'View Warehouse Zone', read: false, create: false, update: false, delete: false },
        { resourceName: 'View Warehouse Bin Location', read: false, create: false, update: false, delete: false },
        { resourceName: 'View Inventory Items', read: false, create: false, update: false, delete: false },
        { resourceName: 'View Roles', read: false, create: false, update: false, delete: false },
        { resourceName: 'View Warehouse', read: false, create: false, update: false, delete: false },
        { resourceName: 'View Warehouse Shelves', read: false, create: false, update: false, delete: false },
        { resourceName: 'View Item Categories', read: false, create: false, update: false, delete: false },
      ],
    };
  },
  methods: {
    assignPermissions() {

      // Implement logic to assign permissions
      console.log('Permissions assigned!');
    },
  },
};
</script>

