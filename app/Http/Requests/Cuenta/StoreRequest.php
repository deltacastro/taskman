<?php

namespace App\Http\Requests\Cuenta;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'propietario' => 'required',
            'usuario' => 'required',
            'password' => 'required',
            'correo' => 'required|email'
        ];
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'propietario' => 'Propietario',
            'usuario' => 'Usuario',
            'password' => 'Contraseña',
            'correo' => 'Correo'
        ];
    }
}
