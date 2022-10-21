import { MenuBackground } from '../../../components/Menu';
import { MenuLinksHospital } from '../../../components/MenuLinks/MenuLinksHospital';
import { Input, sizes } from '../../../components/Input';
import { Button } from '../../../components/Button';

import { MagnifyingGlass, Trash, Pencil } from 'phosphor-react';

import './styles.css';

export function Medico() {
    return (
        <div>
            <MenuBackground menuLinks={<MenuLinksHospital />}>
                <div className="container-cad-medico">
                    <h3 className="titulo-medico">Cadastrar um novo médico</h3>
                    <form id="formMedico" autoComplete='off'>
                        <input type="hidden" name="idMedico" />
                        <div className="container-inputs-med">
                            <div className="input-med">
                                <label htmlFor="nomeMedico">Nome:</label>
                                <Input.Input
                                    errorText={false}
                                    inputSize={sizes.sm}
                                    type="text"
                                    id="nomeMedico"
                                />
                            </div>
                            <div className="input-med">
                                <label htmlFor="cpfMedico">CPF:</label>
                                <Input.Input
                                    errorText={false}
                                    inputSize={sizes.sm}
                                    type="text"
                                    id="cpfMedico"
                                />
                            </div>
                            <div className="input-med">
                                <label htmlFor="crmMedico">CRM:</label>
                                <Input.Input
                                    errorText={false}
                                    inputSize={sizes.sm}
                                    type="text"
                                    id="crmMedico"
                                />
                            </div>
                            <div className="input-med">
                                <label htmlFor="idEspecialidade">Especialidade:</label>
                                <select id="idEspecialidade" className="input-hospital" name="idEspecialidade">
                                    <option value="0">Selecionar</option>
                                </select>
                            </div>
                            <div id="containerFotoMed" className="container-foto">
                                <Input.Input
                                    errorText={false}
                                    inputSize={sizes.sm}
                                    id="inputCaminhoImg"
                                    type="text"
                                    disabled
                                />

                                <label className="btnFoto select-disable" htmlFor="fotoMedico">Escolher foto</label>
                            </div>
                            <input
                                hidden 
                                type="file"
                                accept=".jpg, .png"
                                id="fotoMedico"
                                placeholder="Foto do Médico"
                            />
                            <input type="hidden" name="idHospital" />
                        </div>
                        <div className="btn-container">
                            <Button.Gray value="Cancelar" type="reset" />
                            <Button.Green value="Salvar" type="submit" />
                        </div>
                    </form>
                </div>
                <div className="container-medico">
                    <div className="container-titulo">
                        <h3>Médicos cadastrados</h3>
                        <div className="container-inputs">
                            <div className="container-search select-disable">
                                <Input.Input
                                    errorText={false}
                                    inputSize={sizes.sm}
                                    id="inputSea
                                rch" type="search" className="input-search" placeholder="Bu
                                scar" />
                                <label htmlFor="inputSearch"></label>
                            </div>
                            <Button.Green value="Download" type="button" />
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Foto</th>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>CRM</th>
                                <th>Especialidade</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img className="foto select-disable" src="" /></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div className="container-btn-med select-disable">
                                        <Button.Delete>
                                            <Trash size={24} />
                                        </Button.Delete>
                                        <Button.Edit>
                                            <Pencil size={24} />
                                        </Button.Edit>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </MenuBackground>
        </div>
    )
}