import { where } from 'sequelize';
import { Project } from '../models/Project.js';

export const getProject = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.json(projects)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createProject = async (req, res) => {
    const { name, priority, description } = req.body;

    try {
        const newProject = await Project.create({
            name,
            description,
            priority
        })
        res.json(newProject)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

export async function getProjectById(req, res) {
    const { id } = req.params;
    try {
      const project = await Project.findOne({
        where: {
          id,
        },
      });
      res.json(project);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }


export const updateProject = async (req, res) => {
    try {
      const { id } = req.params; // tomo el id por params
      const { name, priority, description } = req.body; // tomo los datos por req.body
  
      const project = await Project.findByPk(id); // findByPk es un metodo para buscar en sequelize por primary key para colocar el id de la fila y traer toda la info del objeto
      project.name = name; // doy la info del req.body y lo actualizo
      project.priority = priority; // doy la info del req.body y lo actualizo
      project.description = description; // doy la info del req.body y lo actualizo
      await project.save(); // una vez actualizado lo guardo en la db 
  
      res.json(project); // le envio al cliente el proyecto actualizado
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

export const deleteProject = async (req, res) => {
    try {
        const {id} = req.params // tomo el id que entra por params
        await Project.destroy ({ // utilizo el modelo project con el metodo destroy para buscar y eliminar
            where: { // inica que quiero eliminar puntualmente 
            id,
            }
        })
        res.sendStatus(204) // no estoy enviando nada, pero salio todo bien       
    } catch (error) {
        res.sendStatus(500).json({message:error.messsage}) // salio todo mal
    }
  
}


