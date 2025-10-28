import { useState } from 'react';

export const useFormulario = () => {
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState({ mensagem: '', tipo: '' });

  const enviarFormulario = async (dados) => {
    setLoading(true);
    setResultado({ mensagem: '', tipo: '' });

    try {
      const response = await fetch('http://127.0.0.1:5000/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      });

      const respostaDaApi = await response.json();

      if (response.ok) {
        setResultado({
          mensagem: respostaDaApi.mensagem,
          tipo: 'sucesso'
        });
        return true;
      } else {
        setResultado({
          mensagem: `Erro: ${respostaDaApi.mensagem}`,
          tipo: 'erro'
        });
        return false;
      }
    } catch (error) {
      console.error('Erro ao enviar requisição:', error);
      setResultado({
        mensagem: 'Erro de conexão com a API.',
        tipo: 'erro'
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    resultado,
    enviarFormulario
  };
};