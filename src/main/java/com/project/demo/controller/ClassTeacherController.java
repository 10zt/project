package com.project.demo.controller;

import com.project.demo.entity.ClassTeacher;
import com.project.demo.service.ClassTeacherService;
import com.project.demo.controller.base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.*;

/**
 * 班级教师：(ClassTeacher)表控制层
 *
 */
@RestController
@RequestMapping("/class_teacher")
public class ClassTeacherController extends BaseController<ClassTeacher, ClassTeacherService> {

    /**
     * 班级教师对象
     */
    @Autowired
    public ClassTeacherController(ClassTeacherService service) {
        setService(service);
    }



    @PostMapping("/add")
    @Transactional
    public Map<String, Object> add(HttpServletRequest request) throws IOException {
        Map<String,Object> paramMap = service.readBody(request.getReader());
        this.addMap(paramMap);
        return success(1);
    }



    }
