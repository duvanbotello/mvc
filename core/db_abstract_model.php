<?php
abstract class DBAbstractModel
{
    private static $db_host = 'localhost';
    private static $db_user = 'root';
    private static $db_pass = '';
    private static $db_name = 'mvc';
    protected $query;
    protected $rows2;
    protected $rows = array();
    private $conn;
    private $db;
    public $mensaje = 'Hecho';
    # métodos abstractos para ABM de clases que hereden
    abstract protected function get();
    abstract protected function set();
    abstract protected function edit();
    abstract protected function delete();

    # los siguientes métodos pueden definirse con exactitud y
    # no son abstractos 
    # Conectar a la base de datos
    private function open_connection()
    {
        $this->conn = new mysqli(
            self::$db_host,
            self::$db_user,
            self::$db_pass,
            self::$db_name
        );
        if ($this->conn->connect_errno) {
            echo "Lo sentimos, este sitio web está experimentando problemas.";
            echo "Error: Fallo al conectarse a MySQL debido a: \n";
            echo "Errno: " . $this->conn->connect_errno . "\n";
            echo "Error: " . $this->conn->connect_error . "\n";
            exit;
        }
    }
    # Desconectar la base de datos
    private function close_connection()
    {
        mysqli_close($this->conn);
    }
    # Ejecutar un query simple del tipo INSERT, DELETE, UPDATE
    protected function execute_single_query()
    {
        if ($_POST) {
            $this->open_connection();
            $this->conn->query($this->query);
            $this->close_connection();
        } else {
            $this->mensaje = 'Metodo no permitido';
        }
    }
    # Traer resultados de una consulta en un Array
    protected function get_results_from_query()
    {
        $this->open_connection();
        $result = $this->conn->query($this->query);
        while ($this->rows[] = $result->fetch_assoc());
        $result->close();
        $this->close_connection();
        array_pop($this->rows);
    }
}
