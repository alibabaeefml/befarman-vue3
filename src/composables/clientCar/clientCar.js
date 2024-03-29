import { storeToRefs } from "pinia";
import { useClientCarStore } from "@/store/clientCar";
import ClientCarRepository from "@/abstraction/repositories/clientCarRepository";

export function useClientCar() {
  const store = useClientCarStore();
  const repository = new ClientCarRepository();

  const { getClientCars, getArchivedClientCars, paginate } = storeToRefs(store);
  const indexClientCar = async (paginate) => {
    const { data, pagination } = await repository.index(paginate);
    store.$patch((state) => {
      state.paginate = pagination;
      state.clientCars = getClientCars.value.concat(data);
    });

    return data;
  };
  const indexArchivedClientCar = async (paginate) => {
    const { data, pagination } = await repository.indexArchived(paginate);
    store.$patch((state) => {
      state.paginate = pagination;
      state.archivedClientCars = getArchivedClientCars.value.concat(data);
    });
    return data;
  };
  const updateClientCar = async (clientCarId, clientCarData) => {
    const clientCar = await repository.update(clientCarId, clientCarData);

    const index = store.clientCars.findIndex(
      (clientCar) => clientCar.id === clientCarId
    );
    store.clientCars[index] = clientCar;

    return clientCar;
  };

  const storeClientCar = async (clientCarData) => {
    const clientCar = await repository.store(clientCarData);
    store.clientCars.push(clientCar);
    return clientCar;
  };

  const showClientCar = async (data) => {
    return await repository.show(data);
  };

  const archiveClientCar = async (clientCarId) => {
    await repository.delete(clientCarId);
    store.clientCars.map((e) => {
      if (e.id == clientCarId) {
        store.clientCars.splice(store.clientCars.indexOf(e), 1);
        store.archivedClientCars.splice(0, 0, e);
      }
    });
  };
  const restoreClientCar = async (clientCarId) => {
    await repository.restore(clientCarId);
    store.archivedClientCars.map((e) => {
      if (e.id == clientCarId) {
        store.archivedClientCars.splice(store.archivedClientCars.indexOf(e), 1);
        store.clientCars.splice(0, 0, e);
        return;
      }
    });
  };
  const total = async () => {
    return await repository.total()
  };
  return {
    updateClientCar,
    storeClientCar,
    indexClientCar,
    indexArchivedClientCar,
    showClientCar,
    getClientCars,
    getArchivedClientCars,
    paginate,
    archiveClientCar,
    restoreClientCar,
    total
  };
}
