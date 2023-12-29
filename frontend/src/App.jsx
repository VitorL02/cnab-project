import axios from "axios";
import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function App() {
  const [transactions, setTransactions] = useState([]);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get("http://localhost:8080/report");
      setTransactions(response.data)
    } catch (error) {
      showToastMessage(error.response);
    } finally {
      setIsLoading(false);
    }

  }

  const handleFileUpload = e => {
    setFile(e.target.files[0]);
  }

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', file);
    axios.post('http://localhost:8080/cnab/upload', formData,
      {
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      }).then(response => {
        showToastMessage(response);
      }).catch(error => {
        showToastMessage(error.response);
      });


  }

  const showToastMessage = (response) => {
    if (response.status === 200) {
      toast.success(`${response.data}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (response.status === 409) {
      console.log('teste')
      toast.warn(`${response.data}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error(`Erro ao enviar arquivo CNAB para processamento! Tente novamente`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

  };
  const formatCurrency = (value) => {
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(parseFloat(value));

    return formattedValue;
  };

  useEffect(() => {
    fetchTransactions()
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Importação de CNAB</h1>

      {/* File Upload Form */}
      <div className="mb-8">
        <div className="flex items-center space-x-4">
          <label className="text-gray-600">
            <span className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white py-2 px-4 rounded-lg">
              Choose File
            </span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileUpload}
              accept=".txt"
            />
          </label>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg"
            onClick={uploadFile}
          >
            Upload File
          </button>
          <ToastContainer />
        </div>
      </div>


      <br />

      <button
        className="bg-gray-200 hover:bg-gray-300 text-gray-600 py-2 px-4 rounded-lg mb-4"
        onClick={fetchTransactions}
        disabled={isLoading} // Disable while loading
      >
        <FontAwesomeIcon icon={faSync} spin={isLoading} className="mr-2" />
        {isLoading ? 'Atualizando...' : 'Atualizar Transações'}
      </button>


      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Transações</h2>
        <ul className="bg-white shadow-md rounded-md p-4">
          {transactions.length === 0 ? (
            <p className="mb-4 text-gray-500 text-center">Sem transações disponíveis.</p>
          ) : (

            transactions.map((report, key) => (
              <li
                key={key}
                className="mb-4 p-4 border-b border-gray-300 flex flex-col"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="text-xl font-semibold">{report.nomeDaLoja}</div>
                  <div className={`text-${parseFloat(report.total) >= 0 ? 'green' : 'red'}-500 font-semibold`}>
                    Total: {formatCurrency(parseFloat(report.total))}
                  </div>
                </div>

                {/* Transaction Details Table */}
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Cartão</th>
                      <th className="px-4 py-2">CPF</th>
                      <th className="px-4 py-2">Data</th>
                      <th className="px-4 py-2">Dono da Loja</th>
                      <th className="px-4 py-2">Hora</th>
                      <th className="px-4 py-2">Nome da Loja</th>
                      <th className="px-4 py-2">Tipo</th>
                      <th className="px-4 py-2">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {report.transacaoList.map((transaction, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                        <td className="px-4 py-2">{transaction.cartao}</td>
                        <td className="px-4 py-2">{transaction.cpf}</td>
                        <td className="px-4 py-2">{transaction.data}</td>
                        <td className="px-4 py-2">{transaction.donoDaLoja}</td>
                        <td className="px-4 py-2">{transaction.hora}</td>
                        <td className="px-4 py-2">{transaction.nomeDaLoja}</td>
                        <td className="px-4 py-2">{transaction.tipo}</td>
                        <td className="px-4 py-2">{formatCurrency(transaction.valor)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App
